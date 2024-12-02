export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    // url: "postgresql://spendFriend_owner:wTZY2GPe8Qok@ep-steep-glitter-a1h7gdh7.ap-southeast-1.aws.neon.tech/spendFriend?sslmode=require",
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
      // "postgresql://spendFriend_owner:wTZY2GPe8Qok@ep-steep-glitter-a1h7gdh7.ap-southeast-1.aws.neon.tech/spendFriend?sslmode=require",
  },
};
