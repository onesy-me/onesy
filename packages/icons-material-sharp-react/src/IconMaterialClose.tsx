import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClose = (props: IIcon) => {

  return (
    <Icon
      name='Close'

      short_name='Close'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </Icon>
  );
};

IconMaterialClose.displayName = 'OnesyIconMaterialClose';

export default IconMaterialClose;
