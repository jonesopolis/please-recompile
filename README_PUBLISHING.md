# Blog Post Publishing Skill Demonstration

This repository demonstrates the complete workflow for publishing blog posts to Contentful CMS, including a silly recipe blog post example that can be easily identified.

## 🎯 What This Demonstrates

This skill demonstration shows:
1. ✅ Creating structured blog post content in JSON format
2. ✅ Publishing blog posts to Contentful via Management API
3. ✅ Managing tags (creation and linking)
4. ✅ Working with Rich Text content format
5. ✅ Publishing to Preview API (draft mode)
6. ✅ Complete documentation of the workflow

## 🎪 The Silly Recipe Blog Post

The demo post is called **"The Ultimate Guide to Making Invisible Sandwich"** - a humorous recipe blog that's easy to identify in your Contentful space. It includes:

- Complete Rich Text formatting (headings, bold, italic, lists)
- Multiple sections (ingredients, instructions, troubleshooting)
- Three custom tags: "Recipes", "Culinary Arts", and "Silly"
- SEO metadata
- Proper content structure for Contentful

## 🚀 Quick Start

### Option 1: Run the Simulation (No Credentials Needed)

See what the publishing process looks like without connecting to Contentful:

```bash
npm install
node simulate-publish.js silly-recipe-post.json
```

This will show you:
- Step-by-step what happens during publishing
- Tag creation/verification process
- Entry creation details
- Preview API status
- Content preview

### Option 2: Publish for Real

To actually publish to your Contentful space:

1. **Set up credentials** - Create `.env` file:
   ```bash
   cp .env.example .env
   # Edit .env with your Contentful credentials
   ```

2. **Run the publishing script**:
   ```bash
   node publish-post.js silly-recipe-post.json
   ```

3. **Check Contentful**:
   - Go to https://app.contentful.com/
   - Navigate to Content
   - Find "The Ultimate Guide to Making Invisible Sandwich"
   - It will be in Draft status (Preview API)

## 📁 Files Created

### Core Scripts

- **`publish-post.js`** - Main script for publishing blog posts to Contentful
  - Connects to Contentful Management API
  - Creates/updates tags
  - Creates blog post entries
  - Handles draft vs. published states

- **`simulate-publish.js`** - Simulation script (no credentials needed)
  - Shows the complete workflow
  - Demonstrates each step visually
  - Perfect for understanding the process

### Content & Configuration

- **`silly-recipe-post.json`** - The silly recipe blog post
  - Complete Rich Text content structure
  - Demonstrates all content types
  - Ready to publish

- **`.env.example`** - Environment variable template
  - Shows all required credentials
  - Includes helpful comments
  - Copy to `.env` and fill in

### Documentation

- **`PUBLISHING_GUIDE.md`** - Comprehensive publishing guide
  - Step-by-step instructions
  - Credential setup
  - Rich Text format reference
  - Troubleshooting tips

- **`README_PUBLISHING.md`** - This file
  - Quick start guide
  - Overview of the demonstration
  - File descriptions

## 📋 Publishing Workflow

Here's what happens when you publish a post:

```
1. Load post data from JSON file
   ↓
2. Connect to Contentful Management API
   ↓
3. Process tags
   - Check if each tag exists
   - Create new tags if needed
   - Publish tags
   ↓
4. Check for existing post (by slug)
   ↓
5. Create blog post entry
   - Set all fields
   - Link tags
   - Add SEO metadata
   ↓
6. Save as draft (Preview API)
   OR publish to production
```

## 🔑 Required Contentful Content Model

Your Contentful space needs these content types:

### blogPost
- `title` (Short text, required)
- `slug` (Short text, unique, required)
- `excerpt` (Long text)
- `content` (Rich text)
- `publishDate` (Date)
- `tags` (References, many)
- `metaTitle` (Short text)
- `metaDescription` (Short text)

### tag
- `name` (Short text, required, unique)
- `slug` (Short text, required, unique)

## 📊 Content Structure Example

The silly recipe post demonstrates:

```json
{
  "title": "Post Title",
  "slug": "post-slug",
  "excerpt": "Brief description",
  "publishDate": "2026-01-31",
  "publish": false,  // false = draft (Preview API)
  "tags": [
    { "name": "Tag Name", "slug": "tag-slug" }
  ],
  "content": {
    "nodeType": "document",
    "content": [
      {
        "nodeType": "heading-2",
        "content": [{ "nodeType": "text", "value": "Heading" }]
      },
      {
        "nodeType": "paragraph",
        "content": [{ "nodeType": "text", "value": "Text..." }]
      }
    ]
  }
}
```

## 🎨 Rich Text Node Types Used

The recipe post showcases:
- ✅ `heading-2` - Section headings
- ✅ `heading-3` - Subsection headings
- ✅ `paragraph` - Regular text
- ✅ `ordered-list` - Numbered instructions
- ✅ `unordered-list` - Ingredient lists
- ✅ `bold` text marks
- ✅ `italic` text marks

## 🔍 Preview API vs. Delivery API

### Draft Mode (Preview API) ✅
- Posts are NOT published
- Available at `preview.contentful.com`
- Requires Preview API token
- Perfect for testing/review

### Published Mode (Delivery API)
- Posts are live
- Available at `cdn.contentful.com`
- Uses Delivery API token
- Shows on production site

## 💡 Tips

1. **Always test with simulation first**
   ```bash
   node simulate-publish.js your-post.json
   ```

2. **Use unique slugs** - Each post needs a unique slug

3. **Check your content model** - Ensure Contentful has the right fields

4. **Start in draft mode** - Use `"publish": false` for safety

5. **Review in Contentful** - Always check the web app before publishing

## 🎓 Learning Resources

- **PUBLISHING_GUIDE.md** - Detailed step-by-step guide
- **silly-recipe-post.json** - Example with all features
- **simulate-publish.js** - See the process in action

## 🐛 Troubleshooting

### "Missing required environment variables"
→ Create `.env` file with your credentials (see `.env.example`)

### "Post with slug X already exists"
→ Change the slug to something unique

### "Unauthorized"
→ Check your Management Token in `.env`

### "Field validation failed"
→ Verify your content model matches the required structure

## 🎉 What You Get

After running the publishing script:

1. ✅ "The Ultimate Guide to Making Invisible Sandwich" in Contentful
2. ✅ Three new tags (if they didn't exist)
3. ✅ Post in Draft status (Preview API ready)
4. ✅ Entry link to view in Contentful
5. ✅ Full documentation of what happened

## 📚 Next Steps

1. **Run the simulation** to see how it works
2. **Read PUBLISHING_GUIDE.md** for detailed instructions
3. **Set up your `.env`** with Contentful credentials
4. **Run the real script** to publish the silly recipe
5. **Check Contentful** to see your new post
6. **Modify** the silly-recipe-post.json for your own content
7. **Create** more posts following the same pattern

## 🤝 Contributing

Feel free to:
- Add more example posts
- Improve the documentation
- Add features to the publishing script
- Create more helpful utilities

## 📝 License

This demonstration is part of the ai-blog project.

---

**Happy Publishing! 🚀**

*Remember: The invisible sandwich is best served immediately, before anyone notices it's not there!* 😄
