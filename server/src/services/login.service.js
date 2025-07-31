import { privateApiDB } from "../db/privateApi.js";
import jwt from 'jsonwebtoken'

const login = async ({ username, password }) => {
  try {
    const myQuery = `
    SELECT * FROM users u
    INNER JOIN roles r ON u.role_id = r.id
    WHERE u.username = ?
  `;

    const [response] = await privateApiDB.execute(myQuery, [username]);

    const user = response[0];
    if (!user) {
      return {
        found: false,
      };
    }

    const isMatch = user.password === password.toString();
    if (!isMatch) {
      return {
        found: true,
        isMatch: false,
      };
    }

    const token = jwt.sign(
      { id: user.id, role: user.name, username: user.username },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    return {
      isMatch: true,
      found: true,
      token
    };
  } catch (error) {
    throw error;
  }
};

export { login };
