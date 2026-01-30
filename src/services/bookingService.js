export const submitBooking = async (bookingData) => {
  // Simulate API delay (fake backend)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Later this will be:
  // return axios.post("/api/bookings", bookingData);

  return {
    success: true,
    message: "Booking Confirmed",
  };
};
