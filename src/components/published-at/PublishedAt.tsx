import { SinglePostQueryResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<SinglePostQueryResult>["publishedAt"];
};

const PublishedAt = ({ publishedAt }: PublishedAtProps) => {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
};

export default PublishedAt;
