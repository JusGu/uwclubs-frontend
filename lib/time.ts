export const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      timeZone: "EST",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
  };

  export const formatDateEST = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      timeZone: "EST",
    });
  }
