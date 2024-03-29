export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
};

export const getAllEvents = async () => {
  const results = await fetch(
    "https://nextjs-prerender-fundamentals-default-rtdb.firebaseio.com/events.json"
  );
  const data = await results.json();

  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = async (id) => {
    const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};
