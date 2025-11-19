import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioFileFilled = (props: IIcon) => {

  return (
    <Icon
      name='AudioFileFilled'

      short_name='AudioFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-200q38 0 64-26t26-64v-150h120v-80H480v155q-11-8-23.5-11.5T430-380q-38 0-64 26t-26 64q0 38 26 64t64 26ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
};

IconMaterialAudioFileFilled.displayName = 'OnesyIconMaterialAudioFileFilled';

export default IconMaterialAudioFileFilled;
