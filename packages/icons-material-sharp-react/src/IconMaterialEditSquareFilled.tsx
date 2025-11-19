import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditSquareFilled = (props: IIcon) => {

  return (
    <Icon
      name='EditSquareFilled'

      short_name='EditSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-170l425-425 167 171-422 424H360Zm424-368 57-56-56-56-57 56 56 56ZM120-120v-720h437L280-563v283h282l278-278v438H120Z"/>
    </Icon>
  );
};

IconMaterialEditSquareFilled.displayName = 'OnesyIconMaterialEditSquareFilled';

export default IconMaterialEditSquareFilled;
