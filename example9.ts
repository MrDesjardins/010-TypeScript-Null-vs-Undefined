interface Person {
  id: number;
  name: string;
}
enum TrackerState {
  untouched = "untouched",
  touched = "touched",
  deleted = "deleted",
}
interface Tracker {
  state: TrackerState;
}
function trackEntity<T>(entity: T): T & Tracker {
  return { ...entity, ...{ state: TrackerState.untouched } };
}

const patrick: Person = { id: 1, name: "Patrick" };
const patrickTracked = trackEntity(patrick);
console.log(patrickTracked.state);
