# Shade Blog is a open-source blog script coded with Next.js 14 fullstack (in-progress).

**Go to the demo URL:** https://woblog.net/
![Homepage](https://i.hizliresim.com/rj3kk0i.jpg)

## Features:

- Add/Edit/Delete article,
- Add/Edit/Delete category,
- React to articles with emojis,
- Full SEO friendly metadata and code,
- Authentication (NextAuth),
- Upload image to AWS S3 Bucket and share as a cover img in the article.

## Future Plans:

- [ ] Role based auth
- [ ] Change React Quill with another RTE
- [ ] Comment feature
- [ ] Block multiple/spam reactions

## .env file content:

- DATABASE_URL
- NEXT_PUBLIC_AWS_IAM_ACCESS_KEY_ID
- NEXT_PUBLIC_AWS_IAM_SECRET_KEY
- NEXT_PUBLIC_S3_REGION
- NEXT_PUBLIC_S3_BUCKET
- NEXT_PUBLIC_GOOGLE_ANALYTICS
- NEXTAUTH_SECRET
- GITHUB_ID
- GITHUB_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

## How to Install?

You just need to fill .env content with your own information and start the project. For DATABASE_URL, I used MongoDB Atlas. If you need any help, don't hesitate to contact.
