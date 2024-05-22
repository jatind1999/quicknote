import { format } from "date-fns";

const formatDate = (dateString) => {
    // convert date string to a Date object.
    const date = new Date(dateString);
    const formatString = "LLL, do, yyyy h:m:s a";
    // format and return date using formatting function provided by date-fns.
    return format(dateString, formatString);
};

export default formatDate;
