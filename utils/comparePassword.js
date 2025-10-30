import bcrypt from "bcrypt"

export default function ComparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}