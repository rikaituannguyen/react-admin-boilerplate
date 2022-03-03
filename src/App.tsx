import React, { FC } from 'react';
import { Counter } from './pages/counter/Counter';
import { useTranslation } from 'react-i18next';

const App: FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="App">
      {t('Test')}

      <Counter />

      {children}
    </div>
  );
};

export default App;
