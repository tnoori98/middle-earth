import { twitterApi } from "../../services/api/TwitterApi";
import React, { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

interface Tweets {
    id: string;
    text: string;
    createdAt: string;
}

function Tweets() {
    const defaultTwitterApi = twitterApi();
    const [twitterResponse, setTwitterResponse] = useState<Tweets[]>();

    useEffect(() => {
        async function fetchTweets() {
            const response = await defaultTwitterApi.tweets();
            setTwitterResponse(response.data.response.data);
        }
        fetchTweets();
    }, []);

    return (
        <div>
            <div>
                <h1>Tweets</h1>
                {twitterResponse?.map((tweet) => (
                    <>
                        <div
                            style={{
                                margin: "auto",
                                width: "80%",
                                height: "100%"
                            }}
                        >
                            <div
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex"
                                }}
                            >
                                <TwitterTweetEmbed tweetId={tweet.id} />
                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            </div>
        </div>
    );
}
export default Tweets;
