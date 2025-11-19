import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteW100 = (props: IIcon) => {

  return (
    <Icon
      name='NoteW100'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
};

IconMaterialNoteW100.displayName = 'OnesyIconMaterialNoteW100';

export default IconMaterialNoteW100;
