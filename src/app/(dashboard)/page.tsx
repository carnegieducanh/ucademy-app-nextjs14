import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.actions";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123456",
    username: "john_doe",
    email_address: "john@example.com",
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
};

export default page;
