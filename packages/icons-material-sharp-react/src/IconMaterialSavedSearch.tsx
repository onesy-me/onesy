import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavedSearch = (props: IIcon) => {

  return (
    <Icon
      name='SavedSearch'

      short_name='SavedSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-80-60 30-98-80-64h98l32-98 32 98h98l-80 64 30 98-80-62-80 62Z"/>
    </Icon>
  );
};

IconMaterialSavedSearch.displayName = 'OnesyIconMaterialSavedSearch';

export default IconMaterialSavedSearch;
