# GitHub Pages Deployment Checklist

## Current Status: Getting 404 Error

The site returns GitHub's generic "Site not found" 404 page, which means the deployment hasn't succeeded yet.

## Step-by-Step Fix

### 1. Check Repository Settings (CRITICAL)
1. Go to: https://github.com/hackatami/hackatami.github.io
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source** MUST be set to "GitHub Actions" (NOT "Deploy from a branch")
   - If it shows "Deploy from a branch", change it to "GitHub Actions"

### 2. Verify GitHub Actions Workflow
1. Go to the **Actions** tab in your repository
2. Look for workflow runs after commit: `e734767 Add .nojekyll file`
3. Check if the workflow:
   - ✅ Completed successfully (green checkmark)
   - ❌ Failed (red X) - click to see error details
   - 🟡 Still running (yellow circle)

### 3. Repository Permissions Check
Your workflow has these permissions set:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

If the Actions fail due to permissions, you may need to:
1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions" select "Read and write permissions"

### 4. Wait for Deployment
- GitHub Actions can take 2-5 minutes to complete
- After successful workflow completion, allow another 2-3 minutes for DNS propagation

### 5. Debug Steps if Still Failing

If still getting 404 after checking above:

**Check Actions Logs:**
1. Repository → Actions tab
2. Click on latest workflow run
3. Click on failed job to see error details

**Common Error Messages:**
- "Error: No uploaded artifact was found!" - Build step failed
- "Permission denied" - Repository permissions issue
- "Resource not accessible by integration" - Token permissions issue

**Manual Deployment Test:**
```bash
npm run build
# Check if dist folder has files:
ls -la dist/
```

### 6. Alternative: Manual Pages Setup

If GitHub Actions continues to fail, you can temporarily switch to branch deployment:

1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: Select "main"
4. Folder: Select "/ (root)" or "/docs"
5. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && cp -r dist/* . && git add . && git commit -m 'Deploy' && git push"
   }
   ```

## What Should Happen When Fixed

When working correctly:
1. `https://hackatami.github.io/` should show your React app
2. Routes like `https://hackatami.github.io/#/what-we-did` should work
3. Browser console should show no 404 errors for assets

## Current Configuration Summary
- ✅ Repository: `hackatami.github.io` (configured as user site)
- ✅ Homepage: `https://hackatami.github.io/` (root domain)
- ✅ Base path: `/` (correct for user sites)
- ✅ Router: HashRouter (GitHub Pages compatible)
- ✅ Build output: `dist/` directory
- ✅ .nojekyll file: Added to prevent Jekyll interference
- ✅ **Pages Settings: GitHub Actions deployment**
- ✅ **User Site Configuration: For root domain access**

## Next Steps
1. **IMMEDIATELY** check repository Pages settings (Step 1 above)
2. Check Actions tab for workflow status
3. If Actions are failing, review the error logs
4. Wait 5-10 minutes after successful Actions completion
5. Test the site again

The most likely issue is the Pages source being set to "Deploy from a branch" instead of "GitHub Actions".
