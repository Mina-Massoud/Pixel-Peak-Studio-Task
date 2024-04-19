import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "z7hfdvyj",
  dataset: "pixel-task",
  useCdn: true,
  apiVersion: "2024-04-19",
  token:
    "skiw4BqfMnfHBEguo7p262BFyjjsAVM9KIbn48DDkqQ5WFux9p3FlaJ8OW9cOeuCkhrAq872TmTbcZyyoBV1ZTzGrGGR0T7ysIY10uxKqSwfdpl3wSDqxw4OR1P7nBjOzuemAdLhluFg3YvvT409GFZMoRvAvEXru65sw7K3PS4WsHtlxH65", // should be env but I will make it static to make it easier for you to test
});

export const createAccount = async ( data , isgoogle = false) => {
  try {
    //check if the account not already exist
    let account = [];
    if (!isgoogle) {
      account = await client.fetch(
        `*[_type == "account" && email == "${data.email}"]`
      );
    }

    if (!isgoogle && account.length > 0) {
      throw new Error("Account already exists");
    }

    const response = await client.create({
      _type: "account", // Sanity schema type
      ...data, // Spread the data object into the create method
    });

    console.log("Data sent to Sanity successfully:", response);
    return response; // Return the response from Sanity
  } catch (error) {
    console.error("Error sending data to Sanity:", error);
    throw error; // Throw the error to handle it in the calling code
  }
};
