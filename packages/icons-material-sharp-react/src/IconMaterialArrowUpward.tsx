import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowUpward = (props: IIcon) => {

  return (
    <Icon
      name='ArrowUpward'

      short_name='ArrowUpward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
    </Icon>
  );
};

IconMaterialArrowUpward.displayName = 'OnesyIconMaterialArrowUpward';

export default IconMaterialArrowUpward;
