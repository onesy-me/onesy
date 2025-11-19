import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomSheetsFilled = (props: IIcon) => {

  return (
    <Icon
      name='BottomSheetsFilled'

      short_name='BottomSheets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-360h560v-280H200v280Z"/>
    </Icon>
  );
};

IconMaterialBottomSheetsFilled.displayName = 'OnesyIconMaterialBottomSheetsFilled';

export default IconMaterialBottomSheetsFilled;
