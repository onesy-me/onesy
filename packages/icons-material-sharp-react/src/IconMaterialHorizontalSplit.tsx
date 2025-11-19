import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalSplit = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalSplit'

      short_name='HorizontalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h720v240H120Zm0-320v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
};

IconMaterialHorizontalSplit.displayName = 'OnesyIconMaterialHorizontalSplit';

export default IconMaterialHorizontalSplit;
