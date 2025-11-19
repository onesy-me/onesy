import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeft = (props: IIcon) => {

  return (
    <Icon
      name='AlignHorizontalLeft'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"/>
    </Icon>
  );
};

IconMaterialAlignHorizontalLeft.displayName = 'OnesyIconMaterialAlignHorizontalLeft';

export default IconMaterialAlignHorizontalLeft;
