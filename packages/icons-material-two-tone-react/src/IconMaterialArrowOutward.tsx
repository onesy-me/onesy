import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutward = (props: IIcon) => {

  return (
    <Icon
      name='ArrowOutward'

      short_name='ArrowOutward'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="6,6 6,8 14.59,8 5,17.59 6.41,19 16,9.41 16,18 18,18 18,6"/></g>
    </Icon>
  );
};

IconMaterialArrowOutward.displayName = 'OnesyIconMaterialArrowOutward';

export default IconMaterialArrowOutward;
