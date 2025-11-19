import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideLibrary = (props: IIcon) => {

  return (
    <Icon
      name='SlideLibrary'

      short_name='SlideLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-520h80v440h560v80H80Zm160-160v-480h376l-80 80H320v320h480v-216l80-80v376H240Zm300-160q-23 0-44.5-10.5T460-520q17 0 28.5-11.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 33-23.5 56.5T540-480Zm131-120-71-71 178-177 70 70-177 178Z"/>
    </Icon>
  );
};

IconMaterialSlideLibrary.displayName = 'OnesyIconMaterialSlideLibrary';

export default IconMaterialSlideLibrary;
