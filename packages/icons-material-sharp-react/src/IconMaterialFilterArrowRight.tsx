import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterArrowRight = (props: IIcon) => {

  return (
    <Icon
      name='FilterArrowRight'

      short_name='FilterArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-280L78-800h724L520-440v280H360Zm400-40-56-56 63-64H600v-80h167l-63-64 56-56 160 160-160 160ZM440-468l198-252H242l198 252Z"/>
    </Icon>
  );
};

IconMaterialFilterArrowRight.displayName = 'OnesyIconMaterialFilterArrowRight';

export default IconMaterialFilterArrowRight;
