import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceBarFilled = (props: IIcon) => {

  return (
    <Icon
      name='SpaceBarFilled'

      short_name='SpaceBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-240h80v160h480v-160h80v240H160Z"/>
    </Icon>
  );
};

IconMaterialSpaceBarFilled.displayName = 'OnesyIconMaterialSpaceBarFilled';

export default IconMaterialSpaceBarFilled;
