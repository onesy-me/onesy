import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagon = (props: IIcon) => {

  return (
    <Icon
      name='Pentagon'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-200h364l123-369-305-213-305 213 123 369Zm-58 80L80-600l400-280 400 280-160 480H240Zm240-371Z"/>
    </Icon>
  );
};

IconMaterialPentagon.displayName = 'OnesyIconMaterialPentagon';

export default IconMaterialPentagon;
