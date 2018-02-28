const dateFormatter = new Intl.DateTimeFormat("en-us", {
  month: "short",
  year: "2-digit"
});

export function nonNull(obj) {
  return obj;
}

export function isNull(obj) {
  return !obj || obj.length === 0;
}

export function toShortDate(date) {
  if (nonNull(date) && typeof date.getMonth === "function") {
    return dateFormatter.format(date);
  } else {
    return "Present";
  }
}

export function timeSince(from, to) {
  if (isNull(from)) {
    from = new Date();
  }

  if (isNull(to)) {
    to = new Date();
  }

  var seconds = Math.floor((to - from) / 1000);

  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }

  return Math.floor(seconds) + " seconds";
}
