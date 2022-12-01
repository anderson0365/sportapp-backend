
export const config = {
    QUEUE : process.env.QUEUE || "monitoring",
    QUEUE_URL :process.env.QUEUE_URL || "https://sqs.us-east-1.amazonaws.com/592534610933/monitoring",
    AWS_REGION: process.env.AWS_REGION || "us-east-1",
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID || "poner_aws_key_id",
    SECRET_ACCESS_KEY:process.env.SECRET_ACCESS_KEY ||  "poner_secret_access_key",
};
