# Skills Matrix — Manager Guide

The manager view lets you import your team's self-assessments and see everyone's skill levels in a single matrix. You can compare across the team, adjust individual ratings, view assessment history, and export to CSV for reporting.

---

## Steps

### 1. Open the file
Open `manager.html` in your browser. No internet connection or installation needed.

### 2. Select the profile view
Use the toggle in the top-right corner to switch between **Coders**, **Analysts**, and **Service Managers**. Each profile has its own separate matrix and storage — you'll need to import files into the correct view.

### 3. Import your team's assessments
Click **Import JSON** in the top-right corner. You can select multiple JSON files at once — one per team member. Each file is the export from their `index.html`.

If a file is for a different profile (e.g. you import an Analyst file into the Coders view), it will be skipped and you'll be told why.

### 4. Review the matrix
Each row is a team member; each column is a skill. The colour-coded cells show their self-assessed level. Click any column header to see the full skill description and level definitions.

### 5. Adjust ratings if needed
Click any cell to cycle it through the levels. This lets you record your own view of someone's rating alongside their self-assessment. Changes are saved automatically in your browser.

### 6. View assessment history
If a team member has submitted more than one assessment over time, a **▶ N exports** button appears in their name cell. Click it to expand and see all their past snapshots as additional rows below, greyed out for easy comparison.

### 7. Add members manually if needed
Type a name in the text box at the top and click **Add** to add a team member without a JSON file. You can then fill in their ratings manually. To remove someone, hover over their name and click the **×** button.

### 8. Export the matrix
Click **Export CSV** to download the full matrix as a spreadsheet. This includes all team members and their current ratings, suitable for sharing or reporting.

---

> **Tip:** Your matrix state persists in the browser between sessions — you don't need to re-import files every time you open it. Just open `manager.html` and your last saved view will be restored.

> **Note:** If you receive an updated JSON from a team member (e.g. they've re-rated themselves), simply import the new file. Their current ratings will be updated and the new snapshot added to their history automatically.
