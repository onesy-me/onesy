import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceBarFilled = (props: IIcon) => {

  return (
    <Icon
      name='SpaceBarFilled'

      short_name='SpaceBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360q-33 0-56.5-23.5T160-440v-120q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v120h480v-120q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v120q0 33-23.5 56.5T720-360H240Z"/>
    </Icon>
  );
};

IconMaterialSpaceBarFilled.displayName = 'OnesyIconMaterialSpaceBarFilled';

export default IconMaterialSpaceBarFilled;
