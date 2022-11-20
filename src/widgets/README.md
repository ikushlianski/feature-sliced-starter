# `widgets` directory

## What should go into `widgets`?

Widgets are components bringing together dumb `entities` and the smarts of `features`

This example demonstrates the need for a `widget` layer. It composes dumb `tweet` entity with some smart features from the `features` dir.

```
import { ShareTweet } from "features/tweets/share"; <-- smart logic
import { LikeTweet } from "features/tweets/like"; <-- smart logic
import { TweetCard } from "entities/tweet"; <-- dumb UI part
import { UserThumbnail } from "entities/user"; <-- dumb UI part

// The component uses a template for tweets from the entities layer
// At the same time it provides it with certain features-actions,
// which the entities layer is not supposed to know about because of its scope of responsibility
// 
// Other features and entities are also used here (e.g., UserThumbnail)

// Such a composition could be used on the page level as well, but
// now, such logic becomes easily reusable
// and takes away some of the responsibility from the `pages` layer
//
// Pages now become thinner in terms of logic
export const TweetItem = ({ data,...}: Props) => (
    <TweetCard
        before={<UserThumbnail withPopup={true} />}
        data={data}
        ...
        extra={[
            <LikeTweet key="like" tweetId={data.id} ... />
            <ShareTweet key="share" tweetId={data.id} ... />
        ]}
    />
);
```

---

See [Frontend folder structure](../../README.md)
