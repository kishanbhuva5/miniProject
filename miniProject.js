class JobLibrary {
    constructor() {
        this.jobs = [];
    }

    // Add a new job to the array
    addJob(job) {
        if (this.validateJob(job)) {
            this.jobs.push(job);
            console.log("Job added successfully.");
        } else {
            console.log("Invalid job structure.");
        }
    }

    // Remove a job by title
    removeJob(title) {
        const initialLength = this.jobs.length;
        this.jobs = this.jobs.filter(job => job.title !== title);
        if (this.jobs.length < initialLength) {
            console.log(`Job with title "${title}" removed successfully.`);
        } else {
            console.log("Job not found.");
        }
    }

    // Update a job's details by title
    updateJob(title, updatedDetails) {
        let jobFound = false;
        this.jobs = this.jobs.map(job => {
            if (job.title === title) {
                jobFound = true;
                return { ...job, ...updatedDetails };
            }
            return job;
        });

        if (jobFound) {
            console.log(`Job "${title}" updated successfully.`);
        } else {
            console.log("Job not found.");
        }
    }

    // Delete a job object completely by title
    deleteJob(title) {
        this.removeJob(title);
    }

    // Read all jobs
    readJobs() {
        console.log("Job Listings:", this.jobs);
        return this.jobs;
    }

    // Validate job structure
    validateJob(job) {
        return job && job.title && job.type && job.description && job.location && job.salary && job.company && job.company.name && job.company.contactEmail;
    }
}

// Example usage
const jobLibrary = new JobLibrary();

// Sample Job Object
const job1 = {
    title: "Senior React Developer",
    type: "Full-Time",
    description: "We are seeking a talented Front-End Developer to join our team in Boston, MA.",
    location: "Boston, MA",
    salary: "$70K - $80K",
    company: {
        name: "NewTek Solutions",
        description: "A leading technology company specializing in web development.",
        contactEmail: "contact@teksolutions.com",
        contactPhone: "555-555-5555"
    }
};

jobLibrary.addJob(job1);
jobLibrary.readJobs();
jobLibrary.updateJob("Senior React Developer", { salary: "$75K - $85K" });
jobLibrary.readJobs();
jobLibrary.removeJob("Senior React Developer");
jobLibrary.readJobs();

