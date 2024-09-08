export const useEntityDeletion = ({ setEntities, entityType }) => {
  const removeEntity = (id) => {
    setEntities((prevEntities) => {
      const updatedEntities = prevEntities.filter((entity) => {
        return entity.id !== id;
      });
      localStorage.setItem(entityType, JSON.stringify(updatedEntities));
      return updatedEntities;
    });
  };

  return { removeEntity };
};
