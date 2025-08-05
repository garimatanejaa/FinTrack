# FinTracker

**FinTracker** is your smart, AI-powered financial assistant designed to help users stay on top of their spending, track their transactions, and get actionable insights to improve their financial habits. With real-time syncing, intelligent categorization, and conversational insights powered by Google Gemini, FinTracker makes financial management simple, intuitive, and personalized.

---

## Why FinTracker?

Most people find managing their finances either too tedious or too complex. Traditional expense trackers often lack personalization, insights, or an easy way to interact with your data.

**FinTracker bridges that gap** by offering:
- A smart interface powered by Gemini for chatting with your finances.
- Real-time tracking and insights into your spending behavior.
- Categorization, charts, and summaries that actually make sense.
- Easy accessibility across devices with a modern UI.

---

## Key Features

- **Conversational Financial Assistant**  
  Ask questions like _"How much did I spend on food last month?"_ and get instant answers via Gemini AI.

- **Smart Categorization**  
  Your expenses are automatically sorted into categories like Food, Travel, Bills, etc.

- **Transaction Tracking**  
  Add, edit, and view your transactions — all in one intuitive dashboard.

- **Monthly Summary**  
  Get a comprehensive overview of your expenses and savings each month.

- **Contextual Insights**  
  Gemini provides tips and analysis based on your financial behavior.

- **Cross-platform Friendly**  
  Built with Next.js and Tailwind, the interface is responsive and sleek on all screen sizes.

---

## Tech Stack

| Layer          | Tech Used                       |
|----------------|----------------------------------|
| Frontend       | Next.js, Tailwind CSS           |
| Backend        | Supabase (Database + Auth)      |
| ORM            | Prisma                          |
| AI Assistant   | Google Gemini (LLM)             |
| Hosting        | Vercel / Supabase               |

---

## Use Cases

- **Students** managing monthly pocket money or allowances.
- **Young professionals** trying to budget rent, groceries, and savings.
- **Freelancers** tracking personal vs project-based expenses.
- **Families** managing household spending.

---

## How It Works

1. **User Authentication**  
   Sign up or log in using Supabase Auth.

2. **Add Transactions**  
   Manually enter expenses or income with tags, notes, and categories.

3. **AI Insights**  
   Ask Gemini questions about your financial trends.

4. **Dashboard**  
   Visualize your financial activity with charts and summaries.

5. **Monthly Breakdown**  
   Track your progress and spot saving opportunities every month.

---

## Architecture Style

- **Framework**: Next.js 14 (App Router) with file-based routing under `/app`
- **Styling**: Tailwind CSS with Shadcn UI for component design
- **Data Layer**: Prisma ORM + Supabase DB
- **API Layer**: Server Actions and `app/api/` endpoints
- **AI Integration**: Google Gemini API
- **Background Jobs**: Inngest for CRON & event-based processing
- **Security**: Arcjet for rate limiting and bot protection
- **Deployment**: Vercel



[Demo Video](https://youtu.be/falGcRL2bVA)
