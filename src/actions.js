export const onInsert = (user) => ({
    type: 'INSERT-USER',
    payload: user,
});

export const onEdit = (content) => ({
    type: 'UPDATE-USER',
    payload: content,
});

export const onRemove = (content) => ({
    type: 'REMOVE-USER',
    payload: content,
});
