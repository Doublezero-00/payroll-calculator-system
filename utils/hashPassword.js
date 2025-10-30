import bcrypt from "bcrypt"

export default function hashPassword(password) {
    try {
        const saltRounds = 10;
        const hashed = bcrypt.hash(password, saltRounds);
        return hashed;
    } catch(error) {
        console.log(error);
    }
}