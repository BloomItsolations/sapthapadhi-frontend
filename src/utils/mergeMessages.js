export const mergeMessages = (myMessages, allMessages, myUserId, userId) => {
    const combinedMessages = [...myMessages, ...allMessages];
    combinedMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return combinedMessages
        .filter(message => {
            const isMyMessage = message.fromUser == myUserId && message.toUser == userId;
            const isUserMessage = message.fromUser == userId && message.toUser == myUserId;
            return isMyMessage || isUserMessage;
        })
        .map(message => {
            const messageFrom = message.fromUser == myUserId ? 'me' : 'user';
            return {
                messageFrom,
                message: message.message,
                timestamp: message.timestamp,
            };
        });
};