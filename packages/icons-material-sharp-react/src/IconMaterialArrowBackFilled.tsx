import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowBackFilled'

      short_name='ArrowBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
    </Icon>
  );
};

IconMaterialArrowBackFilled.displayName = 'OnesyIconMaterialArrowBackFilled';

export default IconMaterialArrowBackFilled;
