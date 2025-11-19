import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalRight = (props: IIcon) => {

  return (
    <Icon
      name='AlignHorizontalRight'

      short_name='AlignHorizontalRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z"/>
    </Icon>
  );
};

IconMaterialAlignHorizontalRight.displayName = 'OnesyIconMaterialAlignHorizontalRight';

export default IconMaterialAlignHorizontalRight;
