import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEnd = (props: IIcon) => {

  return (
    <Icon
      name='CallEnd'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-280 16-421l40-41q85-91 197.5-134.5T480-640q114 0 225.5 44T904-462l40 41-145 141-159-120v-134q-38-12-78-19t-82-7q-42 0-82 7t-78 19v134L161-280Zm79-222q-29 15-56 34.5T128-424l40 40 72-56v-62Zm480 2v60l72 56 40-38q-29-26-56-45t-56-33Zm-480-2Zm480 2Z"/>
    </Icon>
  );
};

IconMaterialCallEnd.displayName = 'OnesyIconMaterialCallEnd';

export default IconMaterialCallEnd;
