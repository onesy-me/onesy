import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGuideFilled = (props: IIcon) => {

  return (
    <Icon
      name='TvGuideFilled'

      short_name='TvGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm200-200h80v-240h70l90 240h80l120-320H660l-60 180-60-180H200v80h120v240Z"/>
    </Icon>
  );
};

IconMaterialTvGuideFilled.displayName = 'OnesyIconMaterialTvGuideFilled';

export default IconMaterialTvGuideFilled;
