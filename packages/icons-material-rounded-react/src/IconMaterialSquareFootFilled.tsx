import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFootFilled = (props: IIcon) => {

  return (
    <Icon
      name='SquareFootFilled'

      short_name='SquareFoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"/>
    </Icon>
  );
};

IconMaterialSquareFootFilled.displayName = 'OnesyIconMaterialSquareFootFilled';

export default IconMaterialSquareFootFilled;
