import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrWeak = (props: IIcon) => {

  return (
    <Icon
      name='HdrWeak'

      short_name='HdrWeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-320q-66 0-113-47T40-480q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm480 80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
};

IconMaterialHdrWeak.displayName = 'OnesyIconMaterialHdrWeak';

export default IconMaterialHdrWeak;
