function getReadableStatus(job) {
    if (job.isRunning()) {
      return "";
    }
    return job.hasErrors() ? "Pause" : "Resume";
  }