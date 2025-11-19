import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdit = (props: IIcon) => {

  return (
    <Icon
      name='Edit'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l585-583 167 171-582 582H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
    </Icon>
  );
};

IconMaterialEdit.displayName = 'OnesyIconMaterialEdit';

export default IconMaterialEdit;
