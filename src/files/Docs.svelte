<script lang="ts">
    const REPORTS = [
        [
            "https://github.com/rahatchd/reports/blob/main/Automated_Fitness_Tracking.pdf",
            "Automated fitness tracking system",
        ],
        [
            "https://github.com/rahatchd/reports/blob/main/Floating_Hull_Report.pdf",
            "Floating hull simulation using Lagrangian mechanics and numerical methods",
        ],
    ];
</script>

<section>
    <h1>docs</h1>

    <ul>
        {#each REPORTS as report}
            <li>
                {report[1]}: <a href={report[0]} target="_blank">link</a>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        padding: 0.5em 1em;
    }
</style>
