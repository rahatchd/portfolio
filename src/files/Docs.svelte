<script lang="ts">
    const REPORTS = [
        [
            "https://github.com/rahatchd/reports/blob/main/Rahat_Dhande_Resume.pdf",
            "Resume",
            "Resume/CV in PDF format",
        ],
        [
            "https://github.com/rahatchd/reports/blob/main/Automated_Fitness_Tracking.pdf",
            "Automated fitness tracking system",
            "Paper for capstone project regarding automated fitness tracking",
        ],
        [
            "https://github.com/rahatchd/reports/blob/main/Floating_Hull_Report.pdf",
            "Floating hull report",
            "Simulation of floating hulls in inviscid fluid using Lagrangian mechanics and numerical methods",
        ],
    ];
</script>

<section>
    <h1>docs</h1>

    <ul>
        {#each REPORTS as report}
            <li>
                <a href={report[0]} target="_blank">{report[1]}</a>
                <br />
                <i>{report[2]}</i>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        padding: 0.5em 1em;
    }
</style>
