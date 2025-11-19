import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarsFilled = (props: IIcon) => {

  return (
    <Icon
      name='StarsFilled'

      short_name='Stars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialStarsFilled.displayName = 'OnesyIconMaterialStarsFilled';

export default IconMaterialStarsFilled;
